<template>
    <div class="login-layout">
        <main>
            <header>
                <div class="tientv-header-login">
                    <div class="tientv-header-login__item">
                        <RouterLink to="/" class="tientv-header-logo">TIENTV SHOP</RouterLink>
                    </div>
                    <div class="tientv-header-login__item">Đăng nhập</div>
                    <div class="tientv-header-login__item">Bạn cần giúp đỡ</div>
                </div>
            </header>
            <div class="tientv-form-login">
                <div>
                    <div class="tientv-form-login__header">
                        <div class="logo">Đăng nhập</div>
                    </div>
                    <div class="tientv-form-login__body">
                        <div>
                            <input type="text" placeholder="Email/Số điện thoại">
                        </div>
                        <div>
                            <input type="password" placeholder="Mật khẩu">
                        </div>
                        <div>
                            <button class="btn-login">Đăng nhập</button>
                        </div>
                        <div>
                            <RouterLink to="/" class="tientv-forget-password">Quên mật khẩu</RouterLink>
                            <RouterLink to="/" class="tientv-smss">Đăng nhập với SMSS</RouterLink>
                        </div>
                        <div>HOẶC</div>
                        <div>
                            <button class="btn-facebook">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg"
                                    alt="">
                                Facebook
                            </button>
                            <button @click="loginWithGoogle()" class="btn-google">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
                                    alt="">
                                Google
                            </button>
                        </div>
                    </div>
                </div>
                <div class="tientv-link-login">
                    Bạn mới biết đến TIENTV SHOP?
                    <RouterLink to="/" class="tientv-sign-up">Đăng ký</RouterLink>
                </div>
            </div>
        </main>
        <footer class="tientv-footer-login">
            <div class="tientv-footer-bg">
                <div class="tientv-footer-bg__item">
                    <div class="title">
                        DỊCH VỤ KHÁCH HÀNG
                    </div>
                    <div class="footer-link">
                        <span>Trung tâm trợ giúp TIENTV SHOP</span>
                        <span>TIENTV SHOP Blog</span>
                        <span>TIENTV SHOP MALL</span>
                        <span>Hướng dẫn mua hàng/Đặt hàng</span>
                        <span>Hướng dẫn bán hàng</span>
                        <span>Đơn hàng</span>
                        <span>Trả hàng/Hoàn tiền</span>
                        <span>Liên hệ TIENTV SHOP</span>
                        <span>Chính sách bảo hành</span>
                    </div>
                </div>
                <div class="tientv-footer-bg__item">
                    <div class="title">
                        TIENTV SHOP
                    </div>
                    <div class="footer-link">
                        <span>Về TIENTV SHOP</span>
                        <span>Tuyển dụng</span>
                        <span>Điều khoản TIENTV SHOP</span>
                        <span>Chính sách bảo mật</span>
                        <span>Flash Sale</span>
                        <span>Liên hệ truyền thông</span>
                    </div>
                </div>
                <div class="tientv-footer-bg__item">
                    <div class="title">
                        THANH TOÁN
                    </div>
                    <div class="footer-link">
                        <span>
                            <img src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png?20201011055544"
                                alt="">
                        </span>
                        <span>MOMO</span>
                    </div>
                </div>
                <div class="tientv-footer-bg__item">
                    <div class="title">
                        THEO DÕI TIENTV SHOP
                    </div>
                    <div class="footer-link">
                        <span>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg"
                                alt="">
                            <p>Facebook</p>
                        </span>
                        <span>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png"
                                alt="">
                            <p>Instagram</p>
                        </span>
                        <span>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
                                alt="">Linkedln
                        </span>
                    </div>
                </div>
            </div>
            <div class="tientv-copyright">
                <div class="tientv-copyright__item">© 2025 TIENTV SHOP. Tất cả bản quyền thuộc về TIENTV.</div>
                <div class="tientv-copyright__item">Quốc gia & Khu vực: Việt Nam</div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    /* ĐẶT TÊN KHÔNG ĐƯỢC THIẾU ' ' */
    name: 'LoginView',
    /* ĐẶT TÊN KHÔNG ĐƯỢC THIẾU ' ' */
    methods: {
        loginWithGoogle() {
            window.location.href = "http://localhost:8080/oauth2/authorization/google";
        }
    }
}
</script>