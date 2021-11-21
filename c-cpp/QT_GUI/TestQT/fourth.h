#ifndef FOURTH_H
#define FOURTH_H

#include <QDialog>
#include <QTimer>

namespace Ui {
class fourth;
}

class fourth : public QDialog
{
    Q_OBJECT

public:
    explicit fourth(QWidget *parent = nullptr);
    ~fourth();
public slots:
    void myfunction();

private:
    Ui::fourth *ui;
    QTimer *timer;
};

#endif // FOURTH_H
