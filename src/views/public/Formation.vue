<template>
    <div>
      <h1>Formation works ! </h1> 
      
      <ul>
        <h2> Formations ESPE </h2>
        <li> <a href="https://nuage03.apps.education.fr/index.php/s/DixbS9JS2NdZw9N" target="_blank">Français cycle 03 </a> </li>
        <li> <a href="https://nuage03.apps.education.fr/index.php/s/5CqwAArXJB9c5sA" target="_blank">Maths Partie 02 </a> </li>
        <li> <a href="https://nuage02.apps.education.fr/index.php/s/C2Z9sbMPgiwMrxx" target="_blank">Préparation & gestion de classe </a> </li>
        
      </ul>

      <ul>
        <h2> Formation distancielle </h2>
        <li> <a target="_blank" href="https://www.education.gouv.fr/programmes-scolaires-41483"> Programmes scolaires </a></li>
        <li> <a target="_blank" href="https://www.dsden93.ac-creteil.fr/spip/spip.php?article1931"> Livret de rentrée </a></li>
        <li> <a target="_blank" href="https://tribu-sup.phm.education.gouv.fr/toutatice-portail-cms-nuxeo/binary/guide_prise_de_fonction+EFS+%281%29.pdf?type=FILE&path=%2Fdefault-domain%2Fworkspaces%2Faide-au-suivi-des-efs%2Forganisation-du-suivi-efs%2Fprise-de-fonction-efs%2Fguide-de-la-prise-de&portalName=foad&liveState=true&fieldName=file:content&t=1625556060">Repères et conseils </a></li>
        <li> <a target="_blank" href="https://www.reseau-canope.fr/BSD/index.aspx"> Séances de classe filmées</a></li>
      </ul>

      <ul>
        <h2> Stage d'observation</h2>
        <li> <a target="_blank" href="./journee-1.docx"> Journée 01 </a></li>
        <li> <a target="_blank" href="./journee-2.docx"> Journée 02 </a></li>
        
      </ul>

      
    </div>
</template>

<script>

import pdf from 'pdfvuer';

export default {
    name: 'Home',
    components: {
        pdf,
    }
  
}
</script>

<style>
li {
    list-style-type: none;
}
</style>