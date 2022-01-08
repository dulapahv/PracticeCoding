/********************************************************************************
** Form generated from reading UI file 'fourth.ui'
**
** Created by: Qt User Interface Compiler version 6.2.2
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_FOURTH_H
#define UI_FOURTH_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QDialog>
#include <QtWidgets/QLabel>
#include <QtWidgets/QVBoxLayout>

QT_BEGIN_NAMESPACE

class Ui_fourth
{
public:
    QVBoxLayout *verticalLayout;
    QLabel *label_date_time;

    void setupUi(QDialog *fourth)
    {
        if (fourth->objectName().isEmpty())
            fourth->setObjectName(QString::fromUtf8("fourth"));
        fourth->resize(807, 441);
        verticalLayout = new QVBoxLayout(fourth);
        verticalLayout->setObjectName(QString::fromUtf8("verticalLayout"));
        label_date_time = new QLabel(fourth);
        label_date_time->setObjectName(QString::fromUtf8("label_date_time"));
        QFont font;
        font.setPointSize(36);
        label_date_time->setFont(font);

        verticalLayout->addWidget(label_date_time);


        retranslateUi(fourth);

        QMetaObject::connectSlotsByName(fourth);
    } // setupUi

    void retranslateUi(QDialog *fourth)
    {
        fourth->setWindowTitle(QCoreApplication::translate("fourth", "Dialog", nullptr));
        label_date_time->setText(QString());
    } // retranslateUi

};

namespace Ui {
    class fourth: public Ui_fourth {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_FOURTH_H
