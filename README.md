# Merck Quiz para DHC y SAIZEN

Para generar la build de produccion debes configurar el archivo `.env`

1. Crear el archivo `.env`
2. Configurar las variables de entorno para el quiz, las posibles combinaciones son:

- Para Español:
  - Standard DHC:
    ```
      VITE_IDIOMA=ES
      VITE_ZONA=ST
      VITE_QUIZ=DHC
    ```
  - Standard SAIZEN:
    ```
      VITE_IDIOMA=ES
      VITE_ZONA=ST
      VITE_QUIZ=SAIZEN
    ```
  - Central DHC:
    ```
      VITE_IDIOMA=ES
      VITE_ZONA=CT
      VITE_QUIZ=DHC
    ```
  - Central Saizen:
    ```
      VITE_IDIOMA=ES
      VITE_ZONA=CT
      VITE_QUIZ=SAIZEN
    ```
  - Chile DHC:
    ```
      VITE_IDIOMA=ES
      VITE_ZONA=CH
      VITE_QUIZ=DHC
    ```
  - Chile SAIZEN:
    ```
      VITE_IDIOMA=ES
      VITE_ZONA=CH
      VITE_QUIZ=DHC
    ```
- Para Portugues:
  - DHC:
    ```
    VITE_IDIOMA=PT
    VITE_ZONA=ST
    VITE_QUIZ=DHC
    ```
  - SAIZEN:
    ```
      VITE_IDIOMA=PT
      VITE_ZONA=ST
      VITE_QUIZ=SAIZEN
    ```

3. Una vez creado el arrchivo `.env` con las variables para el respectivo quiz debes correr el siguiente comando en la terminal:

- `npm run build`
- esto creara una carpeta `dist` con los archivos necesarios para el quiz especificado en el archivo `.env`

4.  Debes copiar los archivos de la carpeta `dist` que son los que iran en el servidor
5.  Debes hacer lo mismo para cada uno de los quiz en la lista
