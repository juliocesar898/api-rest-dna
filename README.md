# Api REst DNA Qrvey

## Starting 🚀



### Prerequisites 📋

```
Nodejs 16.x.x or higher
```

### Installation 🔧


A little intro about the installation. 
```
$ git clone https://github.com/juliocesar898/api-rest-dna.git
$ cd /api-rest-dna
$ npm install
$ npm run dev
```

📘 Full Swagger GUI are available at http://161.35.116.27/:40000/api/docs

📡 Full Swagger Online GUI are available ---> http://161.35.116.27//api/docs

🚀🚀 Actually you can see the api health at http://161.35.116.27//api/health


## Check if dna is special ✔
```
curl --location 'http://161.35.116.27/:4000/api/dna' \
--header 'Content-Type: application/json' \
--data '{
    "dna": [
        "AGGCGA",
        "CGTTCC",
        "TAATCG",
        "TCAATT",
        "CTCCTT",
        "TCATAA"
    ]
}'
```

## Get DNA statistics ✔
```
curl --location 'http://161.35.116.27/:4000/api/dashboard'
```

## Deployment 📦

This project was deployed on Digital Ocean, you can see the docs in http://24.199.109.40/api/docs

## Built with 🛠️

* [Nodejs](https://nodejs.org/es/docs) 


## Author ✒️

* **Julio Flores** - *Initial Work* - [juliocesar898](https://github.com/juliocesar898)



---
⌨️ By [juliocesar898](https://github.com/juliocesar898) 📘
