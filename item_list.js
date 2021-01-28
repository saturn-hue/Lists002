"use strict";

$(document).ready(function(){
    var items = [];

    var displayItemList = function() {
        items.sort();
        
        $("#item_list").val( items.join("\n") );
        $("#item").focus();
    };
    
    $("#add_item").click(function() {   
        var textbox = $("#item");
        var item = textbox.val();
        if (item === "") {
            alert("Please enter a item.");
            $("#item").focus();
        } else {  
            // add new item to items array 
            items.push( item ); 

            // clear item text box and re-display items
            textbox.val( "" );
            displayItemList();
        }
    });
    
    $("#delete_item").click(function() {   
        var index = parseInt( prompt( "Please enter the index of the item to delete." ) );
        if ( isNaN(index) ) {
            alert( "Please enter a whole number for the index to delete." );
        } else if ( index < 0 || index > items.length - 1 ) {
            alert( "There isn't a item with the index you entered." );
        } else {
            items.sort();
            items.splice( index, 1 );
            displayItemList(); 
        }
    });
    
    $("#clear_items").click(function() {
        items = [];
        $("#item_list").val( "" );
        $("#item").focus();
    }); 
    
    // set focus on initial load
    $("#item").focus();
});

