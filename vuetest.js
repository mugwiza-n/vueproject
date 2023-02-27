const app=Vue.createApp({
    data(){
        return{
            restaurantName:"Mugwiza's Restaurant",
            breakfast: 10000,
            lunch: 2500,
        dinner:1500
        }
    },
    computed:{
        totAmount(){
            return this.breakfast+this.lunch+this.dinner
        }
    }
})