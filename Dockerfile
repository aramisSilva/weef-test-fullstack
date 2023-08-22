FROM python:3.8-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app
COPY requeriments.txt /app/
RUN pip install --upgrade pip && pip install -r requeriments.txt

COPY . /app/
