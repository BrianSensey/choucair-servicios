Feature: Performance de la landing page de Servicios

    Ir a la landing page de servicios de Choucair y verificar las distintas secciones o elementos que la componen. 

    Scenario: Performing a search operation
    	Given Debes estar en la pagina de servicios
    	Then Se debe mostrar en la parte inferior un mensake informativo sobre el uso de las cookies
        And En la parte superior del navegador se debería ver un menú principal con: "Servicios", "Industrias", "Formación", "Comunidad", "Empleos", "Nosotros" y "Contáctenos"; y un ícono de búsqueda
        