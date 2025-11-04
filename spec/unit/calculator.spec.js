import Calculator from '../../src/calculator.js';

console.log('🧪 Loading Calculator Unit Tests...');

describe('Calculator - Unit Tests', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
    console.log('  🔧 Setting up Calculator instance');
  });

  describe('add method', () => {
    it('should add two positive numbers correctly', () => {
      console.log('    ➕ Testing addition of positive numbers');
      expect(calculator.add(2, 3)).toBe(5);
    });

    it('should add negative numbers correctly', () => {
      console.log('    ➕ Testing addition of negative numbers');
      expect(calculator.add(-1, -1)).toBe(-2);
    });
  });

  describe('subtract method', () => {
    it('should subtract numbers correctly', () => {
      console.log('    ➖ Testing subtraction');
      expect(calculator.subtract(5, 3)).toBe(2);
    });
  });

  describe('multiply method', () => {
    it('should multiply numbers correctly', () => {
      console.log('    ✖️ Testing multiplication');
      expect(calculator.multiply(4, 3)).toBe(12);
    });
  });

  describe('divide method', () => {
    it('should divide numbers correctly', () => {
      console.log('    ➗ Testing division');
      expect(calculator.divide(10, 2)).toBe(5);
    });

    it('should throw error when dividing by zero', () => {
      console.log('    🚫 Testing division by zero error');
      expect(() => calculator.divide(10, 0)).toThrowError('Division by zero is not allowed');
    });
  });
});

console.log('✅ Calculator Unit Tests loaded successfully!');