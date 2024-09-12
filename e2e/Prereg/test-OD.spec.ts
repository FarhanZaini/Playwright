import { test, expect } from '@playwright/test';
import { login } from '../../utils/base'; // Import from base.ts
import { PreregistrationPage } from '../../pages/prereg';
import { LeftTabPage } from '../../pages/left_tab';


test.beforeEach(async ({ page }) => {
  await login(page, "afzan.pks", "u@T_afzan");
});

test('Prereg PK OD', async ({ page }) => {
  const preregPage = new PreregistrationPage(page);
  const leftTabPage = new LeftTabPage(page);

  await expect(leftTabPage.leftBar).toBeVisible();
  expect(leftTabPage.pageBuilderRoot).toContainText(
    'HomePre-RegistrationHUK Pre-RegistrationCreate RevisionMy CasesAppointmentsInsured Person SearchToolsSSNCommon ListingPermanent RepresentativeAnnual DeclarationReemployment Scheduler'
  );
  await expect(leftTabPage.preregistrationLink).toBeVisible();
  leftTabPage.clickPreregistration();
  await page.waitForLoadState('load');

  await preregPage.selectNoticeTypePreRegOption('OD');
  await preregPage.selectNoticeAndBenefitClaimFormOption('Others');
  await preregPage.fillIdentificationNo('841111146229');
  await preregPage.fillEmployerCode('B3200086169Z');
  await preregPage.clickClaimFormSubmissionByListButton();
  await preregPage.clickSearchButton();
  const page1Promise = page.waitForEvent('popup');
  await preregPage.clickNextButton();
  const page1 = await page1Promise;

  await page1.waitForLoadState('load'); // Wait until the "load" event


  await page1.waitForSelector('#btnClose', { timeout: 600000 });
  await expect(page1.locator('#btnClose')).toBeVisible();

  await page1.locator('#btnClose').click();
  await page1.waitForLoadState('load'); // Wait until the "load" event


  await page1.waitForSelector('[role="button"][name="Remarks"]', { timeout: 60000 });
  await expect(page1.getByRole('button', { name: 'Remarks', exact: true })).toBeVisible();
  await expect(page1.locator('#sectionTabs')).toContainText('Remarks');
  await page1.getByRole('button', { name: 'Add Remarks' }).click();
  await page1.getByRole('textbox').fill('test');
  await page1.getByRole('button', { name: 'Save Remarks' }).click();


  await page1.waitForLoadState('load'); // Wait until the "load" event

  await page1.waitForSelector('[role="button"][name="Insured Person Information"]', { timeout: 60000 });

  await expect(page1.getByRole('button', { name: 'Insured Person Information' })).toBeVisible();
  await expect(page1.locator('#sectionTabs')).toContainText('Insured Person Information');

  await page1.getByRole('button', { name: 'Insured Person Information' }).click();

  await page1.getByLabel('Notice and Benefit Claim Form Received Date*').click();
  await page1.locator('#ui-datepicker-div').getByRole('combobox').nth(1).selectOption('2020');
  await page1.getByRole('link', { name: '1', exact: true }).click();
  await page1.getByLabel('Occupation(Based on Form 34)*').click();
  await page1.getByLabel('Occupation(Based on Form 34)*').fill('CS');
  await page1.getByLabel('Address*').click();
  await page1.getByLabel('Address*').fill('Taman Abadi');
  await page1.locator('#AddressInsuredPersonInfo2').click();
  await page1.locator('#AddressInsuredPersonInfo2').fill('Lorong 10');
  await page1.locator('#AddressInsuredPersonInfo3').click();
  await page1.locator('#AddressInsuredPersonInfo3').fill('Jalan 1');
  await page1.getByLabel('State*').selectOption('200714');
  await page1.getByLabel('City*').selectOption('201460');
  await page1.getByLabel('Postcode*').click();
  await page1.getByLabel('Postcode*').fill('51000');
  await page1.getByLabel('Nationality*').selectOption('201749');


  await expect(page1.getByRole('button', { name: 'Employer Information' })).toBeVisible();
  await expect(page1.locator('#sectionTabs')).toContainText('Employer Information');
  await page1.getByRole('button', { name: 'Employer Information' }).click();



  await expect(page1.getByRole('button', { name: 'Occupational Disease' })).toBeVisible();
  await expect(page1.locator('#sectionTabs')).toContainText('Occupational Disease Information');
  await page1.getByRole('button', { name: 'Occupational Disease' }).click();
  await page1.getByLabel('Description of Occupational').click();
  await page1.getByLabel('Description of Occupational').fill('test');
  await page1.getByLabel('Specify duties and how').click();
  await page1.getByLabel('Specify duties and how').fill('test');
  await page1.getByLabel('Please explain symptoms /').click();
  await page1.getByLabel('Please explain symptoms /').fill('test');



  await expect(page1.getByRole('button', { name: 'Medical Certificate' })).toBeVisible();
  // await expect(page1.locator('#sectionTabs')).toContainText('Medical Certificate Information');
  // await page1.getByRole('button', { name: 'Medical Certificate' }).click();
  // await page1.locator('#ctrlField976').getByRole('button', { name: 'Add Record' }).click();
  // await page1.getByRole('textbox').first().click();
  // await page1.getByRole('textbox').first().fill('HKL');
  // await page1.getByRole('textbox').nth(1).click();
  // await page1.getByRole('link', { name: '2', exact: true }).click();
  // await page1.getByRole('textbox').nth(2).click();
  // await page1.getByRole('combobox').nth(3).selectOption('2020');
  // await page1.getByRole('link', { name: '15' }).click();
  // await page1.getByRole('button', { name: 'OK' }).click();
  // await page1.getByRole('combobox').nth(3).selectOption('2020');

  await expect(page1.locator('#sectionTabs')).toContainText('Wages Information');
  await expect(page1.getByRole('button', { name: 'Wages Information' })).toBeVisible();
  await page1.getByRole('button', { name: 'Wages Information' }).click();



  await expect(page1.getByRole('button', { name: 'Preferred SOCSO Office' })).toBeVisible();
  await expect(page1.locator('#sectionTabs')).toContainText('Preferred SOCSO Office');
  await page1.getByRole('button', { name: 'Preferred SOCSO Office' }).click();
  // await page1.getByLabel('SOCSO Office*').selectOption('200402');



  await page1.waitForSelector('[role="button"][name="Certification by Employer"]', { timeout: 60000 });


  await expect(page1.locator('#sectionTabs')).toContainText('Certification by Employer');
  await page1.getByRole('button', { name: 'Certification by Employer' }).click();
  await page1.getByLabel('Name*').click();
  await page1.getByLabel('Name*').fill('MAT');
  await page1.getByLabel('Designation*').click();
  await page1.getByLabel('Designation*').fill('CEO');
  await page1.getByLabel('Date*').click();
  // await page1.getByRole('combobox').nth(1).selectOption('2020');
  // await page1.getByRole('cell', { name: '27' }).click();



  await expect(page1.getByRole('button', { name: 'Bank Information' })).toBeVisible();
  await expect(page1.locator('#sectionTabs')).toContainText('Bank Information');
  await page1.getByRole('button', { name: 'Bank Information' }).click();
  await expect(page1.getByText('Account No.', { exact: true })).toBeVisible();
  await expect(page1.locator('#ctrlField1092')).toContainText('Account No.');
  await page1.getByLabel('Account No.*', { exact: true }).selectOption('Yes');
  await page1.getByLabel('Bank Location*').selectOption('204101');
  await expect(page1.locator('#ctrlField1521').getByText('Bank Name')).toBeVisible();
  await expect(page1.locator('#ctrlField1521')).toContainText('Bank Name');
  await page1.locator('#BankNameLB').selectOption('802121');
  await expect(page1.locator('#ctrlField1041').getByText('Bank Swift Code')).toBeVisible();
  await expect(page1.locator('#ctrlField1041')).toContainText('Bank Swift Code');

  await expect(page1.getByText('Bank Account Type')).toBeVisible();
  await expect(page1.locator('#ctrlField1042')).toContainText('Bank Account Type');
  await page1.getByLabel('Bank Account Type*').selectOption('204401');
  await expect(page1.getByText('Bank Branch')).toBeVisible();
  await expect(page1.locator('#ctrlField1044')).toContainText('Bank Branch');
  await page1.getByLabel('Bank Branch*').fill('KL');
  await page1.getByLabel('Bank Account No.*').fill('12345678');


  await expect(page1.getByRole('button', { name: 'Confirmation of Insured' })).toBeVisible();
  await expect(page1.locator('#sectionTabs')).toContainText('Confirmation of Insured Person/Dependants/Claimant');
  await page1.getByRole('button', { name: 'Confirmation of Insured' }).click();
  await page1.getByLabel('Completed').check();



  // await expect(page1.getByRole('button', { name: 'Supporting Document' })).toBeVisible();
  // await expect(page1.locator('#sectionTabs')).toContainText('Supporting Document');
  // await page1.getByRole('button', { name: 'Supporting Document' }).click();


  // await expect(page1.getByRole('button', { name: 'Preview & Submission' })).toBeVisible();
  // await expect(page1.locator('#sectionTabs')).toContainText('Preview & Submission');
  // await page1.getByRole('button', { name: 'Preview & Submission' }).click();
  // await page1.getByRole('button', { name: 'Show Preview' }).click();
  // await page1.getByLabel('loading').isVisible
  //await page1.getByRole('button', { name: 'Submit' }).click();
  //await page1.getByRole('button', { name: 'Yes' }).click();
  // await page1.goto('http://barista-uat.perkeso.gov.my:13491/ApplicationBuilder/eFormRender.html?WID=980200505680652711FF669F1B2980E6');
  // await expect(page1.getByLabel('Scheme Ref No.')).toBeVisible();
  // await page1.getByRole('button', { name: 'Submit' }).click();



});