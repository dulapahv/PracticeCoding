ls {path}               
ls {path_1} {path_2}	# List both {path_1} and {path_2}.
ls -l {path}	        # Long listing, with date, size and permisions.
ls -a {path}	        # Show all files, including important .dot files that don't otherwise show.
ls -F {path}            # Show type of each file. "/" = directory, "*" = executable.
ls -R {path}            # Recursive listing, with all subdirs.
ls {path} | more        # Show listing one screen at a time.

# It's ok to combine attributes, eg ls -laF gets a long listing of all files with types.
# Don't forget to use '/' or '\\' for paths on Windows.