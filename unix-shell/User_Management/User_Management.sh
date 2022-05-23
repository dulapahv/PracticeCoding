sudo adduser username	                # To add a new user
sudo passwd -l 'username'	            # To change the password of a user
sudo userdel -r 'username'	            # To remove a newly created user
sudo usermod -a -G GROUPNAME USERNAME	# To add a user to a group
sudo deluser USER GROUPNAME	            # To remove a user from a group
finger	                                # Shows information of all the users logged in
finger username	                        # Gives information of a particular user