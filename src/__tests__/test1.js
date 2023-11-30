import Daemon from '../daemon.js';

const daemon1 = new Daemon ("Daemon1", "Daemon");

daemon1.damage(200);
test('LeveUp', () =>  {
    expect(() => {
        daemon1.levelUp();
    }).toThrow(); 
})



