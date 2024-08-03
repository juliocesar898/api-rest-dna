# Api REst DNA Qrvey

## Starting 🚀



### Prerequisites 📋

```
Nodejs 14.x.x or higher
```

### Installation 🔧


A little intro about the installation. 
```
$ git clone https://github.com/juliocesar898/api-rest-dna.git
$ cd /api-rest-dna
$ npm install
$ npm run dev
```

📘 Full Swagger GUI are available at http://localhost:40000/api/docs

📡 Full Swagger Online GUI are available ---> http://unknow/api/docs

🚀🚀 Actually you can see the api health at http://unknow/api/health


## Check if dna is special ✔
```
curl POST --location 'http://unknow/api/dna-special' \
--header 'Content-Type: application/json' \
--data '{
    "dna":[
        "AGGCGA",
        "CATTGC",
        "TAATGG",
        "TCAAGT",
        "CCCCTT",
        "TCATAA"
        ]
    }
'
```

## Deployment 📦

This project was deployed on Digital Ocean, you can see the docs in http://24.199.109.40/api/docs

## Built with 🛠️

* [Nodejs](https://nodejs.org/es/docs) 


## Author ✒️

* **Julio Flores** - *Initial Work* - [juliocesar898](https://github.com/juliocesar898)



---
⌨️ By [juliocesar898](https://github.com/juliocesar898) 📘
