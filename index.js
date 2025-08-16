const mineflayer = require('mineflayer');
const { pathfinder, Movements, goals } = require('mineflayer-pathfinder');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'ksmpvn.mcviet.top',
    port: 25565,
    username: 'ebird',
  });

  bot.loadPlugin(pathfinder);

  bot.on('spawn', () => {
    console.log('✅ Bot đã vào MeowSMP!');
    // Đăng nhập nếu server yêu cầu
    bot.on('spawn', () => {
  console.log('✅ Bot đã vào MeowSMP!')

  // Đợi 10s rồi login
  setTimeout(() => {
    bot.chat('/login duyvu14')
    console.log('🔑 Đã gửi lệnh login')
  }, 10000) // 10000ms = 10 giây

  // Nếu muốn teleport hoặc chạy lệnh khác thì delay thêm
  // setTimeout(() => {
  //   bot.chat('/spawn')
  // }, 15000)
})

    // Dùng lệnh nếu có /home farm hoặc /warp skill
    // bot.chat('/l spawn Lạn_Trì_Hạn_Quan');

    const mcData = require('minecraft-data')(bot.version);
    const defaultMove = new Movements(bot, mcData);
    bot.pathfinder.setMovements(defaultMove);

    // Di chuyển đến tọa độ gần (thay bằng tọa độ thật nếu có)
    const GoalNear = goals.GoalNear;
    bot.pathfinder.setGoal(new GoalNear(0, 65, 0, 1)); // Thay bằng x,y,z thật
  });

  bot.on('end', () => {
    console.log('🔁 Mất kết nối, reconnect sau 10s...');
    setTimeout(createBot, 10000);
  });

  bot.on('error', err => console.log('❌ Error:', err));
}

createBot();
