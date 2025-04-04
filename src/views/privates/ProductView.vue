<template>
    <v-tabs v-model="tab" bg-color="#0056d6">
        <v-tab value="one">Danh sách</v-tab>
        <v-tab value="two">Tạo sản phẩm</v-tab>
        <v-tab value="three">Tạo danh mục</v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
        <v-tabs-window-item value="one">
            One
        </v-tabs-window-item>

        <v-tabs-window-item value="two">
            <v-form @submit.prevent="handleSubmitProduct">
                <v-text-field v-model="product.productName" label="Tên sản phẩm" />
                <v-text-field v-model="product.price" label="Giá" type="number" />
                <v-text-field v-model="product.stock" label="Tồn kho" type="number" />
                <v-textarea v-model="product.description" label="Mô tả" />
                <v-text-field v-model="product.brand" label="Thương hiệu" />

                <v-select
                    v-model="product.categoryId"
                    :items="categories"
                    item-title="name"
                    item-value="id"
                    label="Danh mục"
                />

                <v-btn type="submit" color="primary">Thêm sản phẩm</v-btn>
            </v-form>
        </v-tabs-window-item>

        <v-tabs-window-item value="three">
            <v-form @submit.prevent="handleSubmitCategory">
                <v-text-field v-model="category.name" label="Tên danh mục" required />
                <v-switch v-model="category.isActive" label="Kích hoạt" />
                <v-btn type="submit" color="primary">Lưu</v-btn>
            </v-form>
        </v-tabs-window-item>
    </v-tabs-window>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const tab = ref('two')

const CATEGORY_API = '/api/categories'
const PRODUCT_API = '/api/products'

const category = ref({
    name: '',
    isActive: true
})

const categories = ref([])
const product = ref({
    productName: '',
    price: 0,
    stock: 0,
    description: '',
    brand: '',
    categoryId: null
})

const fetchCategories = async () => {
    try {
        const response = await axios.get(CATEGORY_API)
        categories.value = response.data
    } catch (error) {
        console.error('Không thể tải danh mục:', error)
    }
}

const handleSubmitCategory = async () => {
    try {
        await axios.post(CATEGORY_API, category.value)
        alert('Tạo danh mục thành công!')
        category.value = { name: '', isActive: true }
        fetchCategories() // load lại danh sách danh mục
    } catch (error) {
        console.error('Lỗi khi tạo danh mục:', error)
        alert('Tạo danh mục thất bại!')
    }
}

const handleSubmitProduct = async () => {
    try {
        await axios.post(PRODUCT_API, product.value)
        alert('Tạo sản phẩm thành công!')
        product.value = {
            productName: '',
            price: 0,
            stock: 0,
            description: '',
            brand: '',
            categoryId: null
        }
    } catch (error) {
        console.error('Lỗi khi tạo sản phẩm:', error)
        alert('Tạo sản phẩm thất bại!')
    }
}

onMounted(() => {
    fetchCategories()
})
</script>