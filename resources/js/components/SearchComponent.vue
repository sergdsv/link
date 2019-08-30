<template>
    <div>
        <input type="text" v-model="keywords" _.debounce="3000">
        <ul v-if="results.length > 0">
            <div v-for="result in results" :key="result.id">
                <span v-html="highlight(result.name)"></span>
                <li v-for="(house, index) in result.houses" :key="index" v-text="house.number"></li>
            </div>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                keywords: null,
                results: [],
            };
        },

        watch: {
            keywords(after, before) {
                this.fetch();
            }
        },

        methods: {
            fetch() {
                var app = this;
                axios.get('/api/docs/search/', { params: { keywords: this.keywords } })
                    .then(function (resp) {
                        app.results = resp.data
                    })
                    .catch(error => {});
            },
            highlight(text) {
                return text.replace(new RegExp(this.keywords, 'gi'), '<span class="highlighted">$&</span>');
            }
        }
    }
</script>

<style>

    .highlighted {
        font-weight: bold;
    }

</style>
