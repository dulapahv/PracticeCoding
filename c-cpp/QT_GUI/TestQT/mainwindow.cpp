#include "mainwindow.h"
#include "ui_mainwindow.h"

#include <QMessageBox> // for the message box pop-up
#include "dialog.h" // for second dialog page

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    connect(ui->horizontalSlider, SIGNAL(valueChanged(int)),
            ui->progressBar, SLOT(setValue(int)));
//    disconnect(ui->horizontalSlider, SIGNAL(valueChanged(int)),
//            ui->progressBar, SLOT(setValue(int)));
}

MainWindow::~MainWindow()
{
    delete ui;
}


void MainWindow::on_pushButton_clicked()
{
    ui->label->setText("Hello World");
}


// Summon message box
void MainWindow::on_pushButton_2_clicked()
{
    // void             about
    // void             aboutQt
    // StandardButton   critical
    // StandardButton   information
    // StandardButton   question
    // StandardButton   warning
    QMessageBox::StandardButton reply = QMessageBox::question(this, "My Title", "This is my custom message",
                                                              QMessageBox::Yes | QMessageBox::No);
    if (reply == QMessageBox::Yes)
        QApplication::quit();
    else
        qDebug() << "No is clicked";
}


void MainWindow::on_pushButton_3_clicked()
{
//    The first approach makes user can't press the mainWindow
//    Dialog dialog;
//    dialog.setModal(true);
//    dialog.exec();
//    hide(); // hide mainwindow
//    The second approach allows user to press the mainWindow (add Dialog *dialog; in mainwindow.h)
    dialog = new Dialog(this);
    dialog->show();
}


void MainWindow::on_actionNew_triggered()
{
    QMessageBox::information(this, "tite", "New");
}


void MainWindow::on_actionOpen_triggered()
{
    QMessageBox::information(this, "tite", "Open");
}


void MainWindow::on_actionExit_triggered()
{
    QMessageBox::information(this, "tite", "Close");
}


void MainWindow::on_pushButton_6_clicked()
{
    Third = new third(this);
    Third->show();
}

void MainWindow::on_pushButton_7_clicked()
{
    Fourth = new fourth(this);
    Fourth->show();
}

