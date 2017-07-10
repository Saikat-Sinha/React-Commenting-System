import axios from 'axios';

module.exports = {
    fetchData: function () {
        var URI = "https://gist.githubusercontent.com/Saikat-Sinha/257a2b69571afece9886f58ac0eaced7/raw/c420da8bb8c2d185921fade278e752b933b38798/commentData.json";

        return axios.get(URI)
            .then(function(response){
                return response.data;
            })

    }
}
