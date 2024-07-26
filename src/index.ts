import { range } from 'lodash'
import P5 from 'p5'

const COUNT = 8

const bgCols = ['#FFEEAA']
const fgCols = ['#FFA500']


const rndItem = (arr: string[]) => arr[Math.round(Math.random() * (arr.length - 1))]

const sketch = (p5: P5) => {
  p5.windowResized = () => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight)
  }

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight)
    p5.frameRate(60)
    p5.noStroke();

    p5.fill(rndItem(fgCols))
    p5.background(rndItem(bgCols));

    const size = 2 * p5.max(p5.width, p5.height) / COUNT

    range(COUNT).forEach(i => {
      range(COUNT).forEach(j => {
        p5.push()
        p5.translate(i*size/2, j*size/2)
        const rotation = Math.round(Math.random() * 4) % 4
        if (rotation === 1) {
          p5.translate(size/2, 0)
          p5.rotate(p5.HALF_PI)
        }
        if (rotation === 2) {
          p5.translate(size/2, size/2)
          p5.rotate(p5.PI)
        }
        if (rotation === 3) {
          p5.translate(0, size/2)
          p5.rotate(3*p5.HALF_PI)
        }
        p5.arc(0, 0, size, size, 0, p5.HALF_PI, p5.PIE)
        p5.pop()
      })
    })
  }
}

new P5(sketch)
