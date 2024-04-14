const form = document.getElementById('taxForm');
const grossIncomeInput = document.getElementById('grossIncome');
const extraIncomeInput = document.getElementById('extraIncome');
const ageInput = document.getElementById('age');
const deductionsInput = document.getElementById('deductions');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');

function showError(element, message) {
    const errorIcon = element.nextElementSibling;
    errorIcon.style.display = 'inline-block';
    errorIcon.title = message;
    element.style.border = '1px solid red'; // Apply red border to input field
    alert(message); // Display alert with error message
}

function hideError(element) {
    const errorIcon = element.nextElementSibling;
    errorIcon.style.display = 'none';
    element.style.border = ''; // Remove red border from input field
}

function validateForm() {
    let isValid = true;

    if (!grossIncomeInput.value || grossIncomeInput.value < 0) {
        showError(grossIncomeInput, 'Gross Annual Income must be a positive number');
        isValid = false;
    } else {
        hideError(grossIncomeInput);
    }

    if (!extraIncomeInput.value || extraIncomeInput.value < 0) {
        showError(extraIncomeInput, 'Extra Income must be a positive number');
        isValid = false;
    } else {
        hideError(extraIncomeInput);
    }

    if (!deductionsInput.value || deductionsInput.value < 0) {
        showError(deductionsInput, 'Total Deductions must be a positive number');
        isValid = false;
    } else {
        hideError(deductionsInput);
    }

    return isValid;
}

function calculateTax(grossIncome, extraIncome, age, deductions) {
    const threshold = 800000;
    const totalIncome = parseFloat(grossIncome) + parseFloat(extraIncome) - parseFloat(deductions);
    let tax = 0;
    let overallIncomeAfterTax = totalIncome;

    if (totalIncome > threshold) {
        const taxableIncome = totalIncome - threshold;
        if (age === '<40') {
            tax = 0.3 * taxableIncome;
        } else if (age === '≥40 & <60') {
            tax = 0.4 * taxableIncome;
        } else {
            tax = 0.1 * taxableIncome;
        }
        overallIncomeAfterTax = totalIncome - tax;
    }

    return {
        tax: tax,
        overallIncomeAfterTax: overallIncomeAfterTax
    };
}

function showModal(taxDetails) {
    modalBody.innerHTML = `
        <p>Deducted Tax Amount: ${taxDetails.tax.toFixed(2)} Lakhs</p>
        <p>Overall Income After Tax Deduction: ${taxDetails.overallIncomeAfterTax.toFixed(2)} Lakhs</p>
        <div class="modal-footer">
            <button class="btn btn-primary close">Close</button>
        </div>
    `;
    modal.style.display = 'flex';

    const modalFooter = modalBody.querySelector('.modal-footer');
    modalFooter.style.alignItems = 'center';
    modalFooter.style.justifyContent = 'center';

    const closeButton = modalBody.querySelector('.close');
    closeButton.addEventListener('click', function () {
        closeModal();
    });
}

function closeModal() {
    modal.style.display = 'none';
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
        const grossIncome = grossIncomeInput.value;
        const extraIncome = extraIncomeInput.value;
        const age = ageInput.value;
        const deductions = deductionsInput.value;
        const taxDetails = calculateTax(grossIncome, extraIncome, age, deductions);
        showModal(taxDetails);
    }
});

modal.addEventListener('click', function (event) {
    if (event.target.classList.contains('close')) {
        closeModal();
    }
});

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        closeModal();
    }
});
