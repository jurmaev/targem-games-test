import { readFile } from 'fs';
import { AppDataSource } from './data-source';
import { Player } from './entity/player';

export function initializeDb() {
  AppDataSource.initialize()
    .then(() => {
      readFile('./src/data/players.csv', (error, data) => {
        if (error) {
          console.error(error);
          return;
        } else {
          data
            .toString()
            .split('\n')
            .slice(1)
            .map(async (item) => {
              const [nickname, email, registered, status] = item.split('; ');
              const [date, month, year] = registered.split(' ')[0].split('.');
              const [hour, minute] = registered.split(' ')[1].split(':');
              const registeredDate = new Date(
                Number(year),
                Number(month) - 1,
                Number(date),
                Number(hour),
                Number(minute)
              ).getTime();
              const user = new Player();
              user.nickname = nickname;
              user.email = email;
              user.registered = registeredDate / 1000;
              user.status = status;
              await AppDataSource.manager.save(user);
            });

          return;
        }
      });
    })
    .catch((error) => console.log(error));
}
