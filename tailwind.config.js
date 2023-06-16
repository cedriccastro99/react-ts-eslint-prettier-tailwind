/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      slate : {
        50 :'#f8fafc',
        100 :'#f1f5f9',
        200 :'#e2e8f0',
        300 :'#cbd5e1',
        400 :'#94a3b8',
        500 :'#64748b',
        600 :'#475569',
        700 :'#334155',
        800 :'#1e293b',
        900 :'#0f172a'
      },
      gray : {
        50 :'#f9fafb',
        100 :'#f3f4f6',
        200 :'#e5e7eb',
        300 :'#d1d5db',
        400 :'#9ca3af',
        500 :'#6b7280',
        600 :'#4b5563',
        700 :'#374151',
        800 :'#1f2937',
        900 :'#111827'
      },
      red : {
        50 :'#fef2f2',
        100 :'#fee2e2',
        200 :'#fecaca',
        300 :'#fca5a5',
        400 :'#f87171',
        500 :'#ef4444',
        600 :'#dc2626',
        700 :'#b91c1c',
        800 :'#991b1b',
        900 :'#7f1d1d'
      },
      green: {
        50 :'#f0fdf4', 
        100 :'#dcfce7', 
        200 :'#bbf7d0', 
        300 :'#86efac', 
        400 :'#4ade80', 
        500 :'#22c55e', 
        600 :'#16a34a', 
        700 :'#15803d', 
        800 :'#166534', 
        900 :'#14532d'
      },
      blue : {
        50 :'#eff6ff',
        100 :'#dbeafe',
        200 :'#bfdbfe',
        300 :'#93c5fd',
        400 :'#60a5fa',
        500 :'#3b82f6',
        600 :'#2563eb',
        700 :'#1d4ed8',
        800 :'#1e40af',
        900 :'#1e3a8a',
      },
      yellow : {
        50 :'#fefce8',
        100 :'#fef9c3',
        200 :'#fef08a',
        300 :'#fde047',
        400 :'#facc15',
        500 :'#eab308',
        600 :'#ca8a04',
        700 :'#a16207',
        800 :'#854d0e',
        900 :'#713f12'
      },
      white : '#ffffff',
      black : '#000000'
    },
    extend: {
      screens: {
        'pcxlg': { 'max': '1920px' },
        'pclg': { 'max': '1536px' },
        'pcmd': { 'max': '1441px' },
        'pcsm': { 'max': '1367px' },
        'tbxxxlg': { 'max': '1335px' },
        'pcxs': { 'max': '1281px' },
        'tbxxlg': { 'max': '1195px' }, 
        'tbxlg': { 'max': '1025px' },
        'tblg': { 'max': '835px' },
        'tbmd': { 'max': '801px' },
        'tbsm': { 'max': '769px' },
        'slg': { 'max': '480px' },
        'smd': { 'max': '428px' },
        'ssmmd': { 'max': '415px' },
        'ssm': { 'max': '412px' },
        'sp': { 'max': '412px' },
        'xs': { 'max': '391px' },
        'xxs': { 'max': '376px' }, 
      }, 
    },
  },
  plugins: [],
}

