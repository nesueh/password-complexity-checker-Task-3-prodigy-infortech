function checkPassword() {
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('feedback');

    const lengthCriteria = password.length >= 12;
    const uppercaseCriteria = /[A-Z]/.test(password);
    const lowercaseCriteria = /[a-z]/.test(password);
    const numberCriteria = /[0-9]/.test(password);
    const specialCriteria = /[\W_]/.test(password);

    let strength = 0;
    strength += lengthCriteria ? 1 : 0;
    strength += uppercaseCriteria ? 1 : 0;
    strength += lowercaseCriteria ? 1 : 0;
    strength += numberCriteria ? 1 : 0;
    strength += specialCriteria ? 1 : 0;

    let strengthMessage = '';
    switch (strength) {
        case 5:
            strengthMessage = 'Very Strong';
            break;
        case 4:
            strengthMessage = 'Strong';
            break;
        case 3:
            strengthMessage = 'Moderate';
            break;
        case 2:
            strengthMessage = 'Weak';
            break;
        default:
            strengthMessage = 'Very Weak';
    }

    feedback.textContent = `Password strength: ${strengthMessage}`;
}
