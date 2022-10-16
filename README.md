# Hack
## Кратко о сервисе
Мы написали веб-приложение, которое ускоряет оформление заказа, снимает основной трафик с диспетчера м помогает водителю работать в желанное время, ведь теперь он сам выбирает заказы. А система мотивации водителей позволит не беспокоиться об эффективности такой работы.
## Архитектура
Коротко об архитектуре нашего приложения:

![image](https://user-images.githubusercontent.com/63101279/196017996-cc9bc8d4-e772-4a4b-954f-1907fac58806.png)

## Мобильное приложение для водителей
С нашим приложением быть водителем стало гораздно легче:

1) Вам необходимо открыть мобильное приложение и авторизоваться в нём.
2) Передвинуть ползунок «Начать смену» и всё - вы в системе.
3) Теперь вы видите активные заявки и приоритеты важности их исполнения.
4) После окончания смены водителю необходимо нажать «Завершить смену» и передвинуть ползунок -> после этого смена считается завершена.

Мобильное приложение реализовано с помощью *Xamarin*.
## Web-интерфейс
В интерфейсе заказчика пользователь может:

1) Отправить заявку на определенные местоположение и вид ТС ближайшим водителям.
2) Посмотреть текущие заявки на определенный вид ТС.

В интерфейсе диспетчера пользователь может:

1) Отменять заявки.
2) Видеть все заявки.
3) Отвечать за чрезвычаййный вызов транспорта.

Web-интерфейс реализован с помощью *React*.
## Серверная часть
Заказы поступают в API и затем направляются в базу данных как заказы “в процессе” и рассылаются на мобильные устройства водителей с подходящей техникой в радиусе 10 км от места, выбранного заказчиком.

Список заказов у водителя отсортирован по важности. Если водитель соглашается на заказ, то его мобильное приложение посылает запрос в API, чтобы задать заказ как “выполненный”, соответственно остальные водители теряют доступ к записи, а заказчику приходит письмо на почту с уведомлением, что его заказ принят неким водителем.

Т. е. сервер представляет собой посредника между водителем и заказчиком. Тогда как диспетчер в этой системе играет роль некого “модератора”, который взаимодействует с чрезвычайными вызовами техники, умеет отклонять ошибочные запросы на ТС и т. д., что также поступает в виде запросов в API.

Авторизация пользователей проходит по заготовленным данным, которые предоставляются компанией.

Средство разработки API - *ASP .NET Core*. Используемая база данных - *PostgreSQL* (В данный момент база данных также находится в *Docker* для удобного локального запуска).
