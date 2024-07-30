#Para la ejecución del proyecto tenemos diferentes maneras de hacerlo. Enumeremos algunas:
1. Opcion 1:
  Ejecutamos el comando: npx cypress open
  ![image](https://github.com/user-attachments/assets/777d05c4-dcb5-41bf-b7f5-b46491aa5d19)

  Se abrirá la interfaz grafica de cypress
  ![image](https://github.com/user-attachments/assets/00eb1099-d1f6-4dcc-a0d9-771aff2f344e)

  Escogeremos la opción E2E testing
  ![image](https://github.com/user-attachments/assets/c5a81605-9f57-4200-b2ba-6558445fa04f)

  Seleccionamos el navegador en el que deseemos ejecutar las pruebas
  ![image](https://github.com/user-attachments/assets/7626749d-f5fe-416b-8189-717bf8f9dfd7)

  Por ultimo clickeamos el spec que deseemos ejecutar
  ![image](https://github.com/user-attachments/assets/64e79e89-a857-4d25-90f7-c82bfbb329be)

2. Opción 2:
  Ejecutamos el comando: npx cypress run
  ![image](https://github.com/user-attachments/assets/1c376b3a-0d7e-471b-9376-62b9cba7082c)

  Al final obtenemos los resultados de la ejecución
  ![image](https://github.com/user-attachments/assets/faafdb54-f7d1-4ff8-a0aa-648c6cc54c33)
  Nota: el caso fallido es debido a que tenemos un dato eliminado en la api de prueba. el sistema lo restaura automaticamente.
  
3. Opción 3:
   Ejecutamos el comando npx cypress --reporter mochawesome --spec "cypres/e2e/DemoBlazeFront.cy.js"
   ![image](https://github.com/user-attachments/assets/ede9dbd8-091d-40d2-a0ec-71599b7a0eb1)
   Nota: Esto ejecutará el report mochaawesome y el caso de front

4. Opción 4:
  Ejecuamos el comando npx cypress run --record --key e20e0d9a-d28f-479e-83c4-ddb0e3389757
  ![image](https://github.com/user-attachments/assets/b573908c-03fd-4828-b548-094ed86a4ad3)

  Obtendremos los resultado en local:
  ![image](https://github.com/user-attachments/assets/10af7a6a-4146-46a0-ac29-65ee14e10305)

  Y a su vez en la dashboard:
  ![image](https://github.com/user-attachments/assets/1be348f9-11d3-4936-95da-b8f0395db7cc)
