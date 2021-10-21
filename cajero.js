var Cuentas = [
    { id: 1, nombre: "Andres Manuel", Password: "BibaAnlo", saldo: "100" ,
    depositar: function(monto){
        if (parseFloat(this.saldo)+parseFloat(monto) > 990){
            return 1
        }
        else{ 
            var total = parseFloat(this.saldo)+parseFloat(monto);
            this.saldo = total.toString()
        }
    },
    retirar: function(monto){
        if (parseFloat(this.saldo)-monto < 10){
            return 1
        }
        else{
            var total = parseFloat(this.saldo)-monto;
            this.saldo = total.toString()
        }
    } },
    { id: 2, nombre: "Enrique Peña", Password: "LordPena", saldo: "700",
    depositar: function(monto){
        if (parseFloat(this.saldo)+parseFloat(monto) > 990){
            return 1
        }
        else{ 
            var total = parseFloat(this.saldo)+parseFloat(monto);
            this.saldo = total.toString()
        }
    },
    retirar: function(monto){
        if (parseFloat(this.saldo)-monto < 10){
            return 1
        }
        else{
            var total = parseFloat(this.saldo)-monto;
            this.saldo = total.toString()
        }
    } },
    { id: 3, nombre: "Ricardo Anaya", Password: "Canallin69", saldo: "500" ,
    depositar: function(monto){
        if (parseFloat(this.saldo)+parseFloat(monto) > 990){
            return 1
        }
        else{ 
            var total = parseFloat(this.saldo)+parseFloat(monto);
            this.saldo = total.toString()
        }
    },
    retirar: function(monto){
        if (parseFloat(this.saldo)-monto < 10){
            return 1
        }
        else{
            var total = parseFloat(this.saldo)-monto;
            this.saldo = total.toString()
        }
    }},
  ];
  var selectUser = document.getElementById("usuario");
  // selectUser.options.length = 0;
  for(index in Cuentas){
    console.log(index)
    selectUser.options[selectUser.options.length] = new Option(Cuentas[index].nombre, Cuentas[index].id);
  }
  function movimientos(e,Option){
      e.preventDefault()
      const interaccion = document.getElementById("interaccion");
      interaccion.style.display = "flex"
      var usuarioSeleccionado = selectUser.value;
      switch(true){
        case Option === 1:
            console.log("consultando")
            document.getElementById("saldo").innerHTML = Cuentas[usuarioSeleccionado-1].saldo
            break;
        case Option === 2:
            console.log("Retirando")
            var monto = document.getElementById("monto");
            var cmonto = monto.value;
            var bandera = Cuentas[usuarioSeleccionado-1].retirar(cmonto)
            if (bandera == 1){
                document.getElementById("saldo").innerHTML = "No puedes tener menos de $10"
                break;
            }
            else {
                document.getElementById("saldo").innerHTML = Cuentas[usuarioSeleccionado-1].saldo
                monto.value = ""
                break;
            }
        case Option === 3:
            console.log("Depositar")
            var monto = document.getElementById("monto");
            var cmonto = monto.value;
            var bandera = Cuentas[usuarioSeleccionado-1].depositar(cmonto)
           //console.log(Cuentas[usuarioSeleccionado-1].saldo)
           if (bandera == 1){
               document.getElementById("saldo").innerHTML = "No puedes tener más de $990"
               break;
            }
            else {
               document.getElementById("saldo").innerHTML = Cuentas[usuarioSeleccionado-1].saldo
               monto.value = ""
               break;
           }
        default:
            console.log("default")
      }
  }
  function Comparar(e){
      e.preventDefault();
      var passwordUsuario = document.getElementById("password");
      var usuarioSeleccionado = selectUser.value;
      console.log(usuarioSeleccionado);
      var pass = passwordUsuario.value
      console.log(pass)
      if (Cuentas[usuarioSeleccionado-1].Password== pass){
          console.log("Password correcto")
          const formularioLogin = document.getElementById("ingreso");
          formularioLogin.style.display = "none"
          const botones = document.getElementById("opcionesUsuario");
          botones.style.display = "flex"
      }
      else{
        console.log("Pasword incorrecto")
        document.getElementById("incorrecto").innerHTML = "Password incorrecto, vuelva a intentar"
        document.getElementById("password").value = ""
      }
  }