// HelloDate.java

import java.util.*;

/** The first Thinking in Java example program
 * Display as a list of properties, and a string and today's Date
 * @author Alva Chien
 * @author www.alvachien.com
 * @version 1.0
 */
public class HelloDate {
    /** Entry point to class & application.
     * @param args array of string arguments
     * @throws exceptions No exceptions thrown
     */
    public static void main(String[] args) {
        System.getProperties().list(System.out);

        System.out.println("Hello, it's : ");
        System.out.println(new Date());
    }
} /* Output: (55% match )
-- listing properties --
java.runtime.name=Java(TM) SE Runtime Environment
sun.boot.library.path=C:\Program Files\Java\jdk1.8.0_121\jr...
java.vm.version=25.121-b13
java.vm.vendor=Oracle Corporation
java.vendor.url=http://java.oracle.com/
path.separator=;
java.vm.name=Java HotSpot(TM) 64-Bit Server VM
file.encoding.pkg=sun.io
user.script=
user.country=US
sun.java.launcher=SUN_STANDARD
sun.os.patch.level=
java.vm.specification.name=Java Virtual Machine Specification
user.dir=C:\Users\\user\Documents\git\aclear...
java.runtime.version=1.8.0_121-b13
java.awt.graphicsenv=sun.awt.Win32GraphicsEnvironment
java.endorsed.dirs=C:\Program Files\Java\jdk1.8.0_121\jr...
os.arch=amd64
java.io.tmpdir=C:\Users\\user\AppData\Local\Temp\
line.separator=

java.vm.specification.vendor=Oracle Corporation
user.variant=
os.name=Windows 10
sun.jnu.encoding=Cp1252
java.library.path=C:\Program Files\Java\jdk1.8.0_121\bi...
java.specification.name=Java Platform API Specification
java.class.version=52.0
sun.management.compiler=HotSpot 64-Bit Tiered Compilers
os.version=10.0
user.home=C:\Users\\user
user.timezone=
java.awt.printerjob=sun.awt.windows.WPrinterJob
file.encoding=Cp1252
java.specification.version=1.8
user.name=user
java.class.path=.
java.vm.specification.version=1.8
sun.arch.data.model=64
java.home=C:\Program Files\Java\jdk1.8.0_121\jre
sun.java.command=HelloDate
java.specification.vendor=Oracle Corporation
user.language=en
awt.toolkit=sun.awt.windows.WToolkit
java.vm.info=mixed mode
java.version=1.8.0_121
java.ext.dirs=C:\Program Files\Java\jdk1.8.0_121\jr...
sun.boot.class.path=C:\Program Files\Java\jdk1.8.0_121\jr...
sun.stderr.encoding=cp437
java.vendor=Oracle Corporation
file.separator=\
java.vendor.url.bug=http://bugreport.sun.com/bugreport/
sun.cpu.endian=little
sun.io.unicode.encoding=UnicodeLittle
sun.stdout.encoding=cp437
sun.desktop=windows
sun.cpu.isalist=amd64
Hello, it's :
Mon Mar 06 13:13:52 CST 2017
*///:~
