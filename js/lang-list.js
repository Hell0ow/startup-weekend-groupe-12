(function($) {
//Définition du plugin
    $.fn.imgDropDown = function() {

        // création d'une liste
        function createList(f){
            // créer la première zone, affichant l'option sélectionnée
            var cell = $('<div class="dropdownCell">' + '<img src="assets/img/fr.png"/>Français' + '</div>');

            // créer la seconde zone, affichant toutes les options
            var dropdown = $('<div class="dropdownPanel"></div>');

            $(this).find("li").each(function(){
                dropdown.append($('<div class="dropdownOpt"></div>')
                    .click(onSelect)
                    .attr("value", $(this).attr("value"))
                    .append($(this).html())
                    .hover(function(){$(this).addClass("dropdownOptSelected");},
                        function(){$(this).removeClass("dropdownOptSelected");})
                );
            });

            // on masque la zone déroulante
            dropdown.hide();
            $.data(cell, "visible", false);

            // on remplace la balise ul par notre liste personnalisée
            $(this).after(dropdown);
            $(this).after(cell);
            $(this).remove();

            // on positionne l'évènement de déroulage de la liste
            cell.click(function(){
                // si la liste est déroulée
                if ($.data(cell, "visible")){
                    dropdown.slideUp("fast");
                    $.data(cell, "visible", false);
                }else{
                    dropdown.slideDown("fast");
                    $.data(cell, "visible", true);
                }
            });

            // fonction appelée à chaque sélection d'un élément
            function onSelect(){
                cell.html($(this).html());
                cell.attr("value", $(this).attr("value"));
                dropdown.slideUp("fast");

                $.data(cell, "visible", false);

            }
        }

        // création d'une liste déroulante personnalisée pour tous les éléments de l'objet jQuery
        $(this).each(createList);

        // interface fluide
        return $(this);
    };
})(jQuery);


$(function(){
    $("ul:eq(0)").imgDropDown({});
});