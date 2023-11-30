import Daemon from '../daemon.js';

test('LevelUp', () =>  {
    const daemon1 = new Daemon ('Daemon1', 'Daemon');
    daemon1.level = 2;           
    const daemon2 = new Daemon('Daemon1', 'Daemon')
    daemon2.levelUp();    
    expect(daemon2).toEqual(daemon1);    
});
