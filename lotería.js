new Vue({
  el:'main',
  data:{
    loteria:"------",
    number:null,
    A:"X",
    B:"X",
    C:"X",
    D:"X",
   
    
    
   
    
    
    
    
  },
  methods:{
    
    
    
    
    
    
    
    generar(){
     this.number = parseInt(Math.random()*11)
     this.numeroGanador()
 
      if (this.number == 0 ) {
        this.loteria = "Sinuano"
      } 
      if (this.number == 1 ) {
        this.loteria = "Caribeña"
      } 
      if (this.number == 2) {
        this.loteria = "Dorado"
      }
      if (this.number == 3) {
        this.loteria = "Astro Sol"
      }
      if (this.number == 4) {
        this.loteria = "Astro Luna"
      }
      if (this.number == 5) {
        this.loteria = "Paisita"
      }
      if (this.number == 6) {
        this.loteria = "Fantástica"
      }
      if (this.number == 7) {
        this.loteria = "Culona"
      }
      if (this.number == 8) {
        this.loteria = "Tolima"
      }
      if (this.number == 9) {
        this.loteria = "Risaralda"
      }
      if (this.number == 10) {
        this.loteria = "Bogota"
      }
      else {
        return this.loteria
      }
      
    
      
    },
    numeroGanador(){
      this.A = parseInt(Math.random()*10)
      this.B = parseInt(Math.random()*10)
      this.C = parseInt(Math.random()*10)
      this.D = parseInt(Math.random()*10)
      
      
    },
    crearLista(){
      
      
      
    }
    
    
    
  }
  
  
  
})