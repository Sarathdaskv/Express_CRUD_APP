$("#add_user").submit(function(event){
alert("Data inserted successfully");
})

$('#update_user').submit(function(event) {
    event.preventDefault();

    const formData = $(this).serialize();
    const userId = $('#userId').val();

    $.ajax({
    
      url: `/api/users/${userId}`,
      type: 'PUT',
      data: formData,
      success: function(response) {
       alert("Data Updated Successfully!")
       window.location.href = 'http://localhost:3000'
      },
      error: function(error) {
        console.log(error)
      }
    });
});

$(document).ready(function() {
  
    $('.delete-btn').on('click', function() {
      const id = $(this).attr('data-id');
      if(confirm('Do you want to delete this record?')){
          $.ajax({
                url: `/api/users/${id}`,
                method: 'DELETE',
               
                success: function(result) {
                  alert('Data Deleted Successfully');
                  location.reload();
                },
                error: function(err) {
                  console.error(err);
                }
              });
      }
      });
    });