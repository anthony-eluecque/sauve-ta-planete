<template>
    <v-card class="question-card py-6" color="#353168">
        <span class="d-block text-center text-h5 mx-6">1KG de riz pollue t-il plus que 300g de boeuf ?</span>
        <v-divider class="mx-6 my-4" :thickness="5" style="opacity: 100% !important;"></v-divider>
        <v-row no-gutters class="mx-6 mt-6">
            <v-col cols="6">
                <v-btn class="choice-btn" color="#C2C2C2">
                    <v-icon icon="mdi-close" color="#1E3050" size="x-large"></v-icon>
                </v-btn>
            </v-col>
            <v-col cols="6" align="right">
                <v-btn class="choice-btn" color="#C2C2C2">
                    <v-icon icon="mdi-check" color="#1E3050" size="x-large"></v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-card>
</template>

<style lang="stylus">
@import '../../styles/components/question-card'
</style>