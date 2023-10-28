function start(){
    with(document){
        let l1 =String(getElementById('left_1').value);
        let l2 =String(getElementById('left_2').value);
        let l3 =String(getElementById('left_3').value);
        let l4 =String(getElementById('left_4').value);
        let l5 =String(getElementById('left_5').value);
        let l6 =String(getElementById('left_6').value);
        let r2 =String(getElementById('right_2').value);
        let r3 =String(getElementById('right_3').value);
        let r4 =String(getElementById('right_4').value);
        let r5 =String(getElementById('right_5').value);
        let r6 =String(getElementById('right_6').value);

        let result = 0;
        let quality;



        if(l1=='911'){
            result+=2
            getElementById('left_1').style.backgroundColor = 'green'
        }else{
            getElementById('left_1').style.backgroundColor = 'red'
        }

        if(l2=='Supra'){
            result+=2
            getElementById('left_2').style.backgroundColor = 'green'
        }else{
            getElementById('left_2').style.backgroundColor = 'red'
        }

        if(l3=='M5'){
            result+=2
            getElementById('left_3').style.backgroundColor = 'green'
        }else{
            getElementById('left_3').style.backgroundColor = 'red'
        }

        if(l4=='Rx7'){
            result+=2
            getElementById('left_4').style.backgroundColor = 'green'
        }else{
            getElementById('left_4').style.backgroundColor = 'red'
        }

        if(l5=='Charger'){
            result+=2
            getElementById('left_5').style.backgroundColor = 'green'
        }else{
            getElementById('left_5').style.backgroundColor = 'red'
        }

        if(l6=='GT-R'){
            result+=2
            getElementById('left_6').style.backgroundColor = 'green'
        }else{
            getElementById('left_6').style.backgroundColor = 'red'
        }

        if(r2=='Huracan'){
            result+=2
            getElementById('right_2').style.backgroundColor = 'green'
        }else{
            getElementById('right_2').style.backgroundColor = 'red'
        }

        if(r3=='488'){
            result+=2
            getElementById('right_3').style.backgroundColor = 'green'
        }else{
            getElementById('right_3').style.backgroundColor = 'red'
        }

        if(r4=='720s'){
            result+=2
            getElementById('right_4').style.backgroundColor = 'green'
        }else{
            getElementById('right_4').style.backgroundColor = 'red'
        }

        if(r5=='Regera'){
            result+=2
            getElementById('right_5').style.backgroundColor = 'green'
        }else{
            getElementById('right_5').style.backgroundColor = 'red'
        }

        if(r6=='Huayra'){
            result+=2
            getElementById('right_6').style.backgroundColor = 'green'
        }else{
            getElementById('right_6').style.backgroundColor = 'red'
        }


        if(result<=6){
            quality = 'anbavarar'
            getElementById('answer').style.backgroundColor = 'red'
            getElementById('quality').style.backgroundColor = 'green'
        }


        if(result> 6 && result<=15){
            quality = 'bavarar'
            getElementById('answer').style.backgroundColor = 'red'
            getElementById('quality').style.backgroundColor = 'green'
        }
        getElementById('answer').innerHTML = result;
        getElementById('quality').innerHTML = quality;

    }
}
