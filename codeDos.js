new Vue({
  el:'main',
  data:{
    cantidad:null,
    paquete:{
    A:"X",
    B:"X",
    C:"X",
    D:"X",
    },
    cambio:true,
    cambio2:false,
    cambio3:false,
    lista:[],
    number: null,
   loteria:null
    
    
    
    
  },
  methods:{
    
    numeroGanador(){
      
if (this.cantidad > 0 && this.cantidad < 21) {
  
  for (var i = 0; i < this.cantidad; i++) {
    if (i !== this.cantidad) {
  
      this.paquete.A = parseInt(Math.random() * 10)
      this.paquete.B = parseInt(Math.random() * 10)
      this.paquete.C = parseInt(Math.random() * 10)
      this.paquete.D = parseInt(Math.random() * 10)
  
      this.lista.push({ ...this.paquete })
  
    }
  }
  
  
  
  
  
  
  this.cambio2 = true
  
} else {
  alert("El numero no esta entre 1 y 20")
};

      this.number = parseInt(Math.random()*11)
    
 
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
       
      }
      
    
     
      
    },
    verLista(){
      this.cambio3 = true,
      this.cambio = false ,
      this.cambio2 = true
      
    },
    atras(){
      this.cambio = true ,
      this.cambio2 = false,
      this.cambio3 = false
      this.lista = []
    }
    
    
    
  }
  
  
  
})