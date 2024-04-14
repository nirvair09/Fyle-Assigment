# Fyle-Assigment - Tax Calculator

This is a simple web application that calculates tax based on the provided income details. It follows the specified requirements for tax calculation and input validation.

## Features

- Calculates tax based on income, deductions, and age according to the specified formula.
- Provides error indication for incorrect input values.
- Allows users to input their age using a dropdown menu.
- Displays a modal with the final tax details upon submission of the form.

## How to Use

1. Open the `index.html` file in a web browser.
2. Fill in the required fields:
   - Gross Annual Income
   - Extra Income
   - Age
   - Applicable Total Deduction
3. Click on the "Submit" button.
4. If there are any errors in the input, error icons will be displayed next to the respective fields. Hovering over the error icon will show a tooltip with the error message.
5. Correct any errors and submit the form again.
6. Upon successful submission, a modal will appear displaying the calculated tax details.

## Formula for Tax Calculation

- Overall income (after deductions) under 8 Lakhs is not taxed.
- For income over 8 Lakhs:
  - 30% tax for people with age < 40
  - 40% tax for people with age ≥ 40 but < 60
  - 10% tax for people with age ≥ 60

## Notes

- This project is implemented using HTML, CSS, and JavaScript. Bootstrap and jQuery are used for styling and DOM manipulation, respectively.
- Assumptions:
  - Income, extra income, and deductions must be positive numbers.
  - Age must be selected from the provided dropdown options.
  - Error icons are not visible by default but will be displayed when there are input errors.

## This is an assignment work made by Chandradeep Roy for Fyle Web Development Internship position.
