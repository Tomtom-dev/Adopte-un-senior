# première étape: Construction du projet Angular
# utilisation d'une image node
FROM node:alpine as build
# dossier de départ
WORKDIR /angular-app/
# copie des fichiers du projet
COPY . .
# installation des dépendances de Node
RUN npm install
# build du projet
RUN npm run build

# seconde étape: création de l'image Web (nginx)
FROM nginx:alpine
# Copie de l'app construite depuis l'étape de construction
COPY --from=build /angular-app/dist/adopte-un-senior-front/ /usr/share/nginx/html
# COPY  dist/ng-todo/ /usr/share/nginx/html