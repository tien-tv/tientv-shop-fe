// stores/auth.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null
  }),
  actions: {
    async login() {
      localStorage.clear();
      sessionStorage.clear();
      document.cookie.split(";").forEach(function (c) {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });

      const baseUrl = 'http://localhost:8080/oauth2/authorization/google';
      const params = new URLSearchParams({
        prompt: 'select_account consent',
        access_type: 'offline',
        response_type: 'code',
        nonce: crypto.randomUUID(),
        include_granted_scopes: 'true',
        state: new Date().getTime(),
      });

      params.append('max_age', '0');
      params.append('login_hint', '');

      const authUrl = `${baseUrl}?${params.toString()}`;

      window.location.replace(authUrl);
    },
    async logout() {
      try {
        await fetch('http://localhost:8080/api/logout', {
          method: 'POST',
          credentials: 'include',
        });

        localStorage.clear();
        sessionStorage.clear();
        document.cookie.split(";").forEach(function (c) {
          document.cookie = c
            .replace(/^ +/, "")
            .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });

        const auth2 = window.gapi?.auth2?.getAuthInstance();
        if (auth2) {
          await auth2.signOut();
          await auth2.disconnect();
        }

        const googleLogoutUrl = "https://accounts.google.com/Logout";
        const logoutIframe = document.createElement("iframe");
        logoutIframe.src = googleLogoutUrl;
        logoutIframe.style.display = "none";
        document.body.appendChild(logoutIframe);

        const redirectUrl = `/login?prompt=select_account&approval_prompt=force&timestamp=${new Date().getTime()}`;
        setTimeout(() => {
          window.location.replace(redirectUrl);
          window.location.reload();
        }, 1000);
      } catch (error) {
        console.error("Logout failed:", error);
        alert("Đăng xuất thất bại. Vui lòng thử lại.");
      }
    },
    async fetchUser() {
      try {
        const response = await axios.get('/api/user');
        if (response.status === 200) {
          this.user = response.data;
        } else {
          this.user = null;
        }
      } catch (error) {
        console.error('Fetch user error:', error);
        this.user = null;
      }
    },
  },
});
