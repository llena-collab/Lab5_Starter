// unit.test.js

/*

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';


test('Valid phone number with dashes', () => { expect(isPhoneNumber('123-456-7890')).toBe(true); });
test('Valid phone number with parentheses', () => { expect(isPhoneNumber('(123) 456-7890')).toBe(true); });
test('Invalid phone number: too short', () => { expect(isPhoneNumber('123-456')).toBe(false); });
test('Invalid phone number: letters', () => { expect(isPhoneNumber('abc-def-ghij')).toBe(false); });


test('Valid email standard', () => { expect(isEmail('test@example.com')).toBe(true); });
test('Valid email subdomain', () => { expect(isEmail('user@mail.ucsd.edu')).toBe(true); });
test('Invalid email: no @', () => { expect(isEmail('testexample.com')).toBe(false); });
test('Invalid email: no domain', () => { expect(isEmail('test@.com')).toBe(false); });


test('Strong password: mixed chars', () => { expect(isStrongPassword('A1_bcdef')).toBe(true); });
test('Strong password: long', () => { expect(isStrongPassword('StrongPass123')).toBe(true); });
test('Weak password: too short', () => { expect(isStrongPassword('Ab1')).toBe(false); });
test('Weak password: no letters', () => { expect(isStrongPassword('12345678')).toBe(false); });


test('Valid date: MM/DD/YYYY', () => { expect(isDate('12/25/2024')).toBe(true); });
test('Valid date: M/D/YYYY', () => { expect(isDate('1/1/1990')).toBe(true); });
test('Invalid date: dashes', () => { expect(isDate('12-25-2024')).toBe(false); });
test('Invalid date: 2-digit year', () => { expect(isDate('12/25/24')).toBe(false); });


test('Valid Hex: 6 chars', () => { expect(isHexColor('#FFFFFF')).toBe(true); });
test('Valid Hex: 3 chars', () => { expect(isHexColor('#000')).toBe(true); });
test('Invalid Hex: missing #', () => { expect(isHexColor('FFFFFF')).toBe(false); });
test('Invalid Hex: non-hex letter', () => { expect(isHexColor('#ZZZ')).toBe(false); });

*/

// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// ==========================================
// 1) TEST PER isPhoneNumber
// ==========================================
test('isPhoneNumber - True 1: Formato standard con trattini', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber - True 2: Formato con parentesi e spazio', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber - False 1: Troppo corto', () => {
  expect(isPhoneNumber('123-456')).toBe(false);
});

test('isPhoneNumber - False 2: Contiene lettere al posto di numeri', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// ==========================================
// 2) TEST PER isEmail
// ==========================================
test('isEmail - True 1: Email classica funzionante', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('isEmail - True 2: Email con lettere maiuscole', () => {
  expect(isEmail('HELLO@domain.org')).toBe(true);
});

test('isEmail - False 1: Manca il simbolo della @', () => {
  expect(isEmail('testexample.com')).toBe(false);
});

test('isEmail - False 2: Estensione del dominio troppo lunga', () => {
  expect(isEmail('test@example.customextension')).toBe(false); // Il regex accetta solo 2 o 3 caratteri alla fine
});

// ==========================================
// 3) TEST PER isStrongPassword
// ==========================================
test('isStrongPassword - True 1: Inizia con lettera e ha numeri/trattino basso', () => {
  expect(isStrongPassword('a1_b2_c3')).toBe(true);
});

test('isStrongPassword - True 2: Password di lunghezza media valida', () => {
  expect(isStrongPassword('Secure_Pass12')).toBe(true);
});

test('isStrongPassword - False 1: Inizia con un numero (non permesso)', () => {
  expect(isStrongPassword('1abcdef')).toBe(false);
});

test('isStrongPassword - False 2: Troppo corta (meno di 4 caratteri)', () => {
  expect(isStrongPassword('Ab1')).toBe(false);
});

// ==========================================
// 4) TEST PER isDate
// ==========================================
test('isDate - True 1: Data standard a due cifre per mese/giorno', () => {
  expect(isDate('11/22/2024')).toBe(true);
});

test('isDate - True 2: Data a singola cifra per mese/giorno', () => {
  expect(isDate('1/2/1995')).toBe(true);
});

test('isDate - False 1: Usa i trattini invece degli slash', () => {
  expect(isDate('11-22-2024')).toBe(false);
});

test('isDate - False 2: L\'anno ha solo 2 cifre invece di 4', () => {
  expect(isDate('11/22/24')).toBe(false);
});

// ==========================================
// 5) TEST PER isHexColor
// ==========================================
test('isHexColor - True 1: Codice Hex standard a 6 caratteri con cancelletto', () => {
  expect(isHexColor('#FF5733')).toBe(true);
});

test('isHexColor - True 2: Codice Hex a 3 caratteri senza cancelletto', () => {
  expect(isHexColor('FFF')).toBe(true);
});

test('isHexColor - False 1: Contiene caratteri non esadecimali (la Z)', () => {
  expect(isHexColor('#ZZZ')).toBe(false);
});

test('isHexColor - False 2: Lunghezza non valida (4 caratteri)', () => {
  expect(isHexColor('#FFFFF')).toBe(false); // Accetta solo 3 o 6 caratteri totali (+ eventualmente il #)
});

