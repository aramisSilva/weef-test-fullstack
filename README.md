# weef-test-fullstack
Projeto Fullstack para Weef

## Dependências

O projeto depende dos seguintes pacotes:

- Python 3.8 ou superior
- Django 4.2
- Django Rest Framework 3.14
- React.js
- Axios.js

## Instalação

### Backend
1. No diretório raiz do projeto existe o arquivo requirements.txt, onde existe todos os requisitos para que o backend funcione corretamente. Para isso é preciso criar um ambiente virtual e instalar todas as dependências.
2. Para criar o ambiente virtual é só executar o comando: ```bash python3 -m venv <nome_da_virtualenv>```
3. Ative o ambiente virtual: `source venv/bin/activate` se for windows: `venv\Scripts\activate`
4. Em seguida, crie um arquivo ".env" na raiz do projeto, com os seguintes valores: `SECRET_KEY = 'django-insecure-d8s!#6zd&67^vy-i6-=ba(bf6r62ye=kv(wz*%rlrt-yepa8-5'`
5. Instale as dependências do projeto: `pip install -r requirements.txt`
6. Execute as migrações do banco de dados: `python manage.py migrate`
7. Agora por último execute o projeto: `python manage.py runserver`

### Frontend


