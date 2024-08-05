# Verwende ein Node.js-Image als Basis
FROM node:18

# Setze das Arbeitsverzeichnis im Container
WORKDIR /usr/src/app

# Kopiere package.json und package-lock.json
COPY package*.json ./

# Installiere die Abhängigkeiten
RUN npm install

# Kopiere den Rest des Anwendungs-Codes
COPY . .

# Setze den Port
EXPOSE 3000

# Starte die Anwendung
CMD ["node", "src/index.js"]

