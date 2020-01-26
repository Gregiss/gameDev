const game = new Vue({
  el: "#app",
  data: {
    user: {"name": "", "lvl": 0, "gold": 10000, "exp": 0},
    click: {"pcoins": 100, "x": 1},
    boxes: [
      {"name": "Upgrades",
       "type": 0,
       "top": 200,
       "items": [
       {"name": "Processor", "lv": 0, "cust": 100, "exp": 0},
       {"name": "Memory", "lv": 0, "cust": 200, "exp": 0},
       {"name": "Graphics", "lv": 0, "cust": 500, "exp": 0},
       {"name": "Storage", "lv": 0, "cust": 500, "exp": 0},
       {"name": "Internet", "lv": 0, "cust": 500, "exp": 0}
       ]
      }
    ]
  },
  methods:{
    upgradeItem(item){
      const id = this.boxes[0].items.indexOf(item)
      if(this.user.gold >= this.boxes[0].items[id].cust){
        this.user.gold -= this.boxes[0].items[id].cust
      if(this.boxes[0].items[id].exp >= 100){
        this.boxes[0].items[id].lv++
        this.click.pcoins = this.click.pcoins * 1.5
        this.boxes[0].items[id].exp = 0
        this.boxes[0].items[id].cust = this.boxes[0].items[id].cust * 1.2
      } else{
        this.boxes[0].items[id].exp += 10
      }
      }
    },
    openBox(id){
       if(this.boxes[id].top == 50){
         this.boxes[id].top = 200
       } else{
         this.boxes[id].top = 50
       }
    },
    closeAllBoxes(){
      for(let i = 0; i < this.boxes.length;i++){
        this.boxes[i].top = 200
      }
    },
    clicker(){
      this.closeAllBoxes()
      this.user.gold += (this.click.pcoins * this.click.x)
      this.expAdd()
      this.$forceUpdate()
    },
    expAdd(){
      if(this.user.exp >= 95){
        this.user.exp = 0
        this.user.lvl++
      } else{
        this.user.exp += 1 * 100 / this.user.lvl;
      }
    }
  }
})
