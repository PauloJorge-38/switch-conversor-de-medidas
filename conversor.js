const medida = prompt("Insira uma medida em metros")

const unidade = prompt(
    "Para qual unidade de medida deseja converter?" +
    "\n1. milimetro (mm)" +
    "\n2. centimetros (cm)" +
    "\n3. decímetros (dm)" +
    "\n4. decâmetro (dc)" +
    "\n5. hectômetros (hm)" +
    "\n6. quilômetros (km)" 
)

switch (unidade) {
    case "1":
        alert("Resultado: " + "m =  " + medida * 1000 + "mm")
        break;
    case "2":
        alert("Resultado: " + "m =  " + medida * 100 + "cm")
        break;
    case "3":
        alert("Resultado: " + "m =  " + medida * 10 + "dm")
        break;
    case "4":
        alert("Resultado: " + "m =  " + medida / 10 + "dam")
        break;
    case "5":
        alerft("Resultado: " + "m =  " + medida / 100 + "hm")
         break;
    case "6":
        alert("Resultado: " + "m =  " + medida / 1000 + "km")
        break;

    default:
        alert("Opção inválida")
        break;
}