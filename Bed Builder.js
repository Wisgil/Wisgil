

    function openColour(evt, colourName) {
          var i, tabcontent2, tablinks2;
          tabcontent2 = document.getElementsByClassName("tabcontent2");
          for (i = 0; i < tabcontent2.length; i++) {
            tabcontent2[i].style.display = "none";
          }
          tablinks2 = document.getElementsByClassName("tablinks2");
          for (i = 0; i < tablinks2.length; i++) {
            tablinks2[i].className = tablinks2[i].className.replace(" active", "");
          }
          document.getElementById(colourName).style.display = "block";
          evt.currentTarget.className += " active";
        }


    function openStorage(evt, storageName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(storageName).style.display = "block";
      evt.currentTarget.className += " active";
    }
    
