const letters = [
  '日',
  'ﾊ',
  'ﾐ',
  'ﾋ',
  'ｰ',
  'ｳ',
  'ｼ',
  'ﾅ',
  'ﾓ',
  'ﾆ',
  'ｻ',
  'ﾜ',
  'ﾂ',
  'ｵ',
  'ﾘ',
  'ｱ',
  'ﾎ',
  'ﾃ',
  'ﾏ',
  'ｹ',
  'ﾒ',
  'ｴ',
  'ｶ',
  'ｷ',
  'ﾑ',
  'ﾕ',
  'ﾗ',
  'ｾ',
  'ﾈ',
  'ｽ',
  'ﾀ',
  'ﾇ',
  'ﾍ',
  ':',
  '・',
  '.',
  '=',
  '*',
  '+',
  '-',
  '<',
  '>',
  '¦',
  '｜',
  'ﾘ',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
]

const canvas = document.getElementById('matrix')
const ctx = canvas.getContext('2d')

const width = (canvas.width = window.innerWidth)
const height = (canvas.height = window.innerHeight)

const fontSize = 18
const columns = canvas.width / fontSize
const drops = new Array(Math.floor(columns)).fill(1)

const draw = () => {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
  ctx.fillRect(0, 0, width, height)

  ctx.fillStyle = '#0F0'
  ctx.font = `${fontSize}px arial`

  for (let i = 0; i < drops.length; i++) {
    const letter = letters[Math.floor(Math.random() * letters.length)]
    const x = i * fontSize
    const y = drops[i] * fontSize

    ctx.fillText(letter, x, y)

    drops[i]++

    if (drops[i] * fontSize > height && Math.random() > 0.95) {
      drops[i] = 0
    }
  }

  window.requestAnimationFrame(draw)
}

draw()
