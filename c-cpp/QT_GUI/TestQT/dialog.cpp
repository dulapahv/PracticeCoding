#include "dialog.h"
#include "ui_dialog.h"

#include <QMessageBox>
#include <QPixmap> // for image
#include <QDir> // for checking directory

Dialog::Dialog(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::Dialog)
{
    ui->setupUi(this);
    QPixmap pix(":/pic/cpp_logo.png");
//    int w = ui->label_pic->width();
//    int h = ui->label_pic->height();
    ui->label_pic->setPixmap(pix);
//    ui->label_pic->setPixmap(pix.scaled(w, h, Qt::KeepAspectRatio, Qt::SmoothTransformation));

//    ui->checkBox->setChecked(true); // check checkbox by default
//    ui->comboBox->addItem(QIcon(":/pic/cpp_logo.png"), "Mark");
//    ui->comboBox->addItem(QIcon(":/pic/cpp_logo.png"), "John");
//    ui->comboBox->addItem(QIcon(":/pic/cpp_logo.png"), "July");

    for (int i = 0; i < 10; i++) {
        ui->comboBox->addItem(QIcon(":/pic/cpp_logo.png"), QString::number(i) + " name");
    }
    ui->comboBox->insertItem(3, QIcon(":/pic/cpp_logo.png"), "New text");

    ui->listWidget->addItem("Mark");
    ui->listWidget->addItem("John");
    ui->listWidget->addItem("July");

    // check if directory exist
    QDir dir("C:/Users/Dulapah Vibulsanti/OneDrive/Documents/GitHub/C-CPP-Guide/QT_GUI/TestQT");
    if (dir.exists()) {
        QMessageBox::information(this, "title", "true");
    }
    else {
        QMessageBox::information(this, "title", "false");
    }

    QDir dir2;
    foreach (QFileInfo var, dir2.drives()) {
        ui->comboBox_2->addItem(var.absoluteFilePath());
    }

    QDir dir3("C:/Users/Dulapah Vibulsanti/OneDrive/Documents/GitHub/C-CPP-Guide/QT_GUI/TestQT");
    foreach (QFileInfo var, dir3.entryInfoList()) {
        if (var.isDir())
            ui->listWidget_2->addItem("Dir: " + var.absoluteFilePath());
        if (var.isFile())
            ui->listWidget_2->addItem("File: " + var.absoluteFilePath());
    }
}

Dialog::~Dialog()
{
    delete ui;
}

void Dialog::on_pushButton_login_clicked()
{
    QString username = ui->lineEdit_username->text();
    QString password = ui->lineEdit_password->text();

    if (username == "test" && password == "test") {
        // show message box
        QMessageBox::information(this, "Login", "Username and password is correct");
        secDialog = new SecDialog(this); // don't forget to create pointer object in dialog.h
        secDialog->show();
    }
    else {
        QMessageBox::warning(this, "Login", "Username or password is incorrect");

        // update label
        ui->credential_info->setText("Username or password is incorrect");
    }
}


void Dialog::on_pushButton_clicked()
{
    if (ui->checkBox->isChecked()) {
        QMessageBox::information(this, "Check", "Tick!");
    }
    else {
        QMessageBox::information(this, "Check", "unTick!");
    }
}


void Dialog::on_checkBox_stateChanged(int arg1)
{
    if (arg1) {
        QMessageBox::information(this, "Check", "Tick!");
    }
    else {
        QMessageBox::information(this, "Check", "unTick!");
    }
}


void Dialog::on_pushButton_2_clicked()
{
    if (ui->radioButton->isChecked()) {
        QMessageBox::information(this, "Check", "Mark");
    }
    if (ui->radioButton_2->isChecked()) {
        QMessageBox::information(this, "Check", "John");
    }
}


void Dialog::on_pushButton_3_clicked()
{
    QMessageBox::information(this, "title", ui->comboBox->currentText());
}


void Dialog::on_pushButton_4_clicked()
{
    ui->listWidget->currentItem()->setForeground(Qt::white);
    ui->listWidget->currentItem()->setBackground(Qt::red);
}
