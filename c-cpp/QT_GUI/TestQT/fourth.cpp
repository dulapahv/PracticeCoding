#include "fourth.h"
#include "ui_fourth.h"

#include <QDebug>
#include <QDateTime>

fourth::fourth(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::fourth)
{
    ui->setupUi(this);
    timer = new QTimer(this);
    connect(timer, SIGNAL(timeout()), this, SLOT(myfunction()));
    timer->start(1000);
}

fourth::~fourth()
{
    delete ui;
}

void fourth::myfunction()
{
//    qDebug() << "update..";
    QTime time = QTime::currentTime();
    QString time_text = time.toString("hh : mm : ss");
    if (time.second() % 2 == 0) {
        time_text.replace(QString(":"), QString(" "));
    }
    ui->label_date_time->setText(time_text);
}
