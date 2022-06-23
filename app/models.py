from django.db import models

# Create your models here.

class Categoria(models.Model):
    nombreCat = models.CharField(max_length = 50)
    def __str__(self):
        return self.nombreCat

class Producto(models.Model):
    nombreProducto = models.CharField(max_length = 50, verbose_name= 'Nombre del Producto')
    precioProducto = models.IntegerField(verbose_name= 'Precio del producto')
    descripcionProducto = models.TextField(verbose_name= 'Descripcion del producto')
    imagen = models.ImageField(upload_to = 'productos', null = True)
    nombreCat = models.ForeignKey(Categoria, on_delete = models.PROTECT)
    def __str__(self):
        return self.nombreProducto

opciones_consultas = [
    [0, 'Consulta'],
    [1, 'Reclamo por error'],
    [2, 'Sugerencia'],
]

class Contacto(models.Model):
    nombre = models.CharField(max_length = 50)
    correo = models.EmailField()
    tipo_contacto = models.IntegerField(choices = opciones_consultas) 
    mensaje = models.TextField()
    avisos = models.BooleanField()
    def __str__(self):
        return self.nombre