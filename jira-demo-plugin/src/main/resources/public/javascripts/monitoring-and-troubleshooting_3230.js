
AJS.$(document).ready(function() {

	AJS.$('#checkSuccess').click(function() {
	  AJS.$.ajax({
			type: "POST",
			dataType: "html",
			url: contextPath + "/secure/admin/jira/monitoringAndTroubleshooting!clearcache.jspa",
			cache: false,
			error: function(response, textStatus, errorThrown) {
				alert("#checkSuccess Error response :: " +response);
			} ,
			success: function(response, textStatus) {
			    alert("#checkSuccess response :: " +response);
			}
		});
	});

	AJS.$('#checkError').click(function() {
    	  AJS.$.ajax({
    			type: "POST",
    			dataType: "html",
    			url: contextPath + "/secure/admin/jira/checksuccess.jspa",
    			cache: false,
    			error: function(response, textStatus, errorThrown) {
                	alert("#checkError responseText :: "+response.responseText);
    			} ,
    			success: function(response, textStatus) {
    			    alert("Success #checkError: message :: "+response);
    			}
    		});
    	});

	/*
     * Simple html encode function to prevent XSS attacks.
     */
    function encodeHtml(toEncode) {
    	return $('<div/>').text(toEncode).html();
    }

});

