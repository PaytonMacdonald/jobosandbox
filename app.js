function showAlert() {
    const alertPlaceholder = document.getElementById('alertPlaceholder');
    alertPlaceholder.innerHTML = `
      <div class="alert alert-warning alert-dismissible fade show mt-3" role="alert">
        This is a Bootstrap alert triggered by JavaScript!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
}  