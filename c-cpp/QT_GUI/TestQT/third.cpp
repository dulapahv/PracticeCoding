#include "third.h"
#include "ui_third.h"

#include <QFile>
#include <QTextStream>
#include <QMessageBox>

#include <QFileDialog>
#include <QDir>

third::third(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::third)
{
    ui->setupUi(this);
}

third::~third()
{
    delete ui;
}

void third::on_pushButton_clicked()
{
    QFile file("C:/Users/Dulapah Vibulsanti/OneDrive/Documents/GitHub/C-CPP-Guide/QT_GUI/TestQT/myfile.txt");
    if (!file.open(QFile::WriteOnly | QFile::Text)) {
        QMessageBox::warning(this, "tlte", "file not open");
    }
    QTextStream out(&file);
    QString text = ui->plainTextEdit->toPlainText();
    out << text;
    file.flush();
    file.close();
}


void third::on_pushButton_2_clicked()
{
    QString filter = "All File (*.*) ;; Text File (*.txt) ;; XML File (*.xml)";
    QString file_name = QFileDialog::getOpenFileName(this, "Open a file", QDir::homePath(), filter);
    QFile file(file_name);
    if (!file.open(QFile::ReadOnly | QFile::Text)) {
        QMessageBox::warning(this, "tlte", "file not open");
    }
    QTextStream in(&file);
    QString text = in.readAll();
    ui->plainTextEdit->setPlainText(text);
    file.close();
}


void third::on_pushButton_3_clicked()
{
    QString file_name = QFileDialog::getOpenFileName(this, "Open a file", QDir::homePath());
    QMessageBox::information(this, "..", file_name);
}

