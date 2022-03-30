//classe com exemplos de como calcular a rota do barco para passar por todas as plataformas

class ControleBarco{
    static random(porto,values = []){
        var results = []
        while (values.length > 0){
            const randId = Math.floor(Math.random()*values.length);
            results.push(values[randId]);
            values.splice(randId,1);
        }
        results.unshift(porto);
        results.push(porto);
        return results;
    }
    // nao funciona
    static near(porto,values = []){
        var results = [porto];
        while (values.length > 0){
            var last = results[results.length -1]
            var near = values[0];
            var nearId = 0;

            var near_distance = Plataformas.distance(last,near);
            values.map((value,i)=>{
                const new_distance = Plataformas.distance(last,value);
                if(new_distance>near_distance){
                    near_distance = new_distance;
                    near = value;
                    nearId = i;
                }
            })
            results.push(near);
            values.splice(nearId,1);
        }
        results.push(porto);
        return results;

    }
}