
$.summernote.addPlugin({

    buttons: { 
        save: function() {
        	var buttonHtml = "";

			buttonHtml += '<button type="button" style="padding-top: 5px; padding-bottom: 4px;" class="btn btn-default btn-sm" title="Save changes in the database" data-event="save-data" data-hide="true" tabindex="-1">';
			buttonHtml += '<i class="fa fa-floppy-o"></i>';
			buttonHtml += '<span style="font-size: 110%; padding: 0; margin-left: 7px;">Save</span>';
			buttonHtml += '</button>';
		 	
		 	return buttonHtml;
        }
    },

    events: { 
        "save-data": function(event, editor, layoutInfo) {
        	debugger;
            // Get current editable node
            //var $editable = layoutInfo.editable();

            // Call insertText with 'hello'
            //editor.insertText($editable, 'Save changes in the database');

            var htmlContent = $('.summernote').code();
            console.log(htmlContent);
        }
    }
});


$('.summernote').summernote({

	// note: the div for each group of buttons will have the "note-toolbar-group" class (besides "btn-group")
    toolbar: [
        ['toolbar-group', ['style']],
        ['toolbar-group', ['bold', 'italic', 'underline', 'clear']],
        ['toolbar-group', ['fontname']],
        ['toolbar-group', ['color']],
        ['toolbar-group', ['ul', 'ol', 'paragraph']],
        ['toolbar-group', ['height']],
        ['toolbar-group', ['link', 'picture', 'hr']],
        ['toolbar-group', ['undo', 'redo',  'codeview']],
        ['toolbar-group', ['save']]
    ]
});

